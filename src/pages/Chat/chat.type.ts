import { RuleSet } from 'styled-components';

export interface ChatUser {
  [key: string]: RuleSet<object>;
  admin: RuleSet<object>;
  person: RuleSet<object>;
}
