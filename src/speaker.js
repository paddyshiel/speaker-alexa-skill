import { Skill, Launch, Intent } from 'alexa-annotations';
import { say, ask } from 'alexa-response';
import ssml from 'alexa-ssml-jsx';

@Skill
export default class Speaker {

  @Launch
  launch() {
    return say('Speaker launched!');
  }

  @Intent('HelloIntent')
  hello({ name = 'world' }) {
    return say(`Hello ${name}`).card({ title: 'Speaker', content: `Hello ${name}` });
  }

  @Intent('AMAZON.HelpIntent')
  help() {
    return ask('I say hello to people. Who should I say hello to?').reprompt('Who should I say hello to?');
  }

  @Intent('AMAZON.CancelIntent', 'AMAZON.StopIntent')
  stop() {
    return say(<speak>Goodbye!</speak>);
  }

}
