export const request = require('request')
export const version = '0.8.2-rest'
export const DASHBOT_API_KEY_GENERIC = 'CHN0cF0S6eHqhQkLMOvdR0UR304zSM08bPpGfgAl'

export class DashbotIo {
  private content
  private contact
  private type
  public version
  public DASHBOT_API_KEY_GENERIC

  public constructor(public message) {
    this.message = message
    this.content = message.content()
    this.contact = message.from()
    this.type = message.type()
    this.version = version
    this.DASHBOT_API_KEY_GENERIC = DASHBOT_API_KEY_GENERIC
  }

  public outgoing() {
    request({
        uri: 'https://tracker.dashbot.io/track?platform=generic&v=0.8.2-rest&type=incoming&apiKey=' + this.DASHBOT_API_KEY_GENERIC,
        qs: {
            type: 'outgoing',
            platform: 'generic',
            apiKey: this.DASHBOT_API_KEY_GENERIC,
            v: this.version,
        },
        method: 'POST',
        json: {
            text: this.message,
            userId: this.contact.name(),
        },
    })
  }

  public incoming() {
    request({
        uri: 'https://tracker.dashbot.io/track?platform=generic&v=0.8.2-rest&type=incoming&apiKey=' + this.DASHBOT_API_KEY_GENERIC,
        qs: {
            type: 'incoming',
            platform: 'generic',
            apiKey: this.DASHBOT_API_KEY_GENERIC,
            v: this.version,
        },
        method: 'POST',
        json: {
            text: this.message,
            userId: this.contact.name(),
        },
    })
  }
}


// export function outgoing(question) {
//     request({
//         uri: 'https://tracker.dashbot.io/track?platform=generic&v=0.8.2-rest&type=incoming&apiKey=' + DASHBOT_API_KEY_GENERIC,
//         qs: {
//             type: 'outgoing',
//             platform: 'generic',
//             apiKey: DASHBOT_API_KEY_GENERIC,
//             v: version,
//         },
//         method: 'POST',
//         json: {
//             text: question,
//             userId: 'Joe',
//         },
//     })
// }

// export function incoming(question) {
//     request({
//         uri: 'https://tracker.dashbot.io/track?platform=generic&v=0.8.2-rest&type=incoming&apiKey=' + DASHBOT_API_KEY_GENERIC,
//         qs: {
//             type: 'incoming',
//             platform: 'generic',
//             apiKey: DASHBOT_API_KEY_GENERIC,
//             v: version,
//         },
//         method: 'POST',
//         json: {
//             text: question,
//             userId: 'Joe',
//         },
//     })
// }
