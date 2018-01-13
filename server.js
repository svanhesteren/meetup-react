// index.js


var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

var Meetup = require("meetup")
var mup = new Meetup()
var top10Array = []

server.listen(3002)
console.log("Amount of current connections:", io.engine.clientsCount);

let topicsCounter = {}

io.on('connection', socket => {
  // console.log('Someone connected...')
  var address = socket.handshake.address
  // var address = socket.request.connection.remoteAddress;
  // console.log(address)
  console.log('New connection from ' + address);
  // console.log(mup)
  console.log("Amount of current connections:", io.engine.clientsCount);

  // if(top10Array.length > 0){
  //   socket.emit('action', top10Array)
  // }
  // else{
  //   socket.emit('action', "No top 10 yet, please try again...")
  // }

  socket.on('disconnect', () => {
    console.log("Someone disconnected...");
    console.log("Amount of current connections:", io.engine.clientsCount);
  })
})

mup.stream("/2/rsvps", stream => {
  stream
  .on("data", item => {

    // inside of our stream event handler (!) we retrieve the group topics
    const topicNames = item.group.group_topics.map(topic => topic.topic_name)
    // if (topicNames.indexOf("Software Development") == -1) {return}
    if (!topicNames.includes("Software Development")) {return}      

      console.log("Got a new valid array of topics!");
      const rsvpData = {
        type: "ADD_RSVP",
        payload: item
      }

      io.emit('action', rsvpData)

      topicNames.forEach(name => {
        if (topicsCounter[name]) {
          topicsCounter[name]++
        }
        else {
          topicsCounter[name] = 1
        }
      })

      const arrayOfTopics = Object.keys(topicsCounter)

      arrayOfTopics.sort((topicA, topicB) => {
        if (topicsCounter[topicA] > topicsCounter[topicB]) {
          return -1
        }
        else if (topicsCounter[topicB] > topicsCounter[topicA]) {
          return 1
        }
        else {
          return 0
        }
      })

      // console.log(topicsCounter)
      top10Array = arrayOfTopics.slice(0,10).map((topicName) => {
        return {topic:topicName, count:topicsCounter[topicName]}
      })

      // console.log(topArray);
      // io.emit('action', top10Array)
      const data = {
        type: 'UPDATE_TOPICS',
        payload: [...top10Array]
      }
      console.log(data);

      io.emit('action', data)
      // io.emit('action', item.event)

    }).on("error", e => {
      console.log("error! " + e)
    })
  })
