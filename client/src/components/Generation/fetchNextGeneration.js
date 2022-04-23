async function fetchNextGeneration() {
  console.log("fetch next", this.props.generation);
  await this.props.fetchGeneration();

  // A negative delay arises because props.expirationTime has not updated yet.
  let delay =
    new Date(this.props.generation.expirationTime).getTime() -
    new Date().getTime();

  if (delay < 2000) {
    delay = 2000;
  }
  console.log("fng", delay);

  this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
}

export default fetchNextGeneration;
