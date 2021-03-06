const client = require('../client.js')
const CommandError = require('../CommandError.js')
const { codeBlockify } = require('../utils.js')

module.exports = {
  name: 'info',
  description: 'get info about a meme',
  usage: 'info <command>',
  minArgs: 1,
  maxArgs: 1,
  async execute(message, args) {
    const command = args[0]

    const query = `query Info($command: String!){
      meme(command: $command) {
        _id
        name
        author {
          id
          name
        }
        url
        commands
        tags
        volume
        createdAt
      }
    }`

    try {
      const info = await client.request(query, { command })
      console.log(typeof info)
      if (info.meme === null) {
        console.log(info)
        throw new CommandError('There is no meme named ' + command + '.')
      }
      message.channel.send(codeBlockify(JSON.stringify(info.meme, null, 2)))
    } catch (error) {
      if (error instanceof CommandError) {
        throw error
      } else {
        console.error(error)
        throw new CommandError(
          'Something went wrong when getting info on this meme'
        )
      }
    }
  }
}
