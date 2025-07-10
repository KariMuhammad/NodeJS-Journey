const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("user-subscribed", (user) => {
  console.log("Congratulations " + user);
});

eventEmitter.emit("user-subscribed", "Karim");

class UserEvents extends EventEmitter {
  constructor() {
    super();
  }

  subscribedInService() {
    this.emit("subscribed-in-service");
  }

  subscribeInService() {
    this.on("subscribed-in-service", () => {
      console.log("User subscribed in service");
    });
  }
}

const userEvents = new UserEvents();

userEvents.subscribeInService(); // listen
userEvents.subscribedInService(); // trigger
