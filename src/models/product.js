const CLASSIC_ID = 'classic';
const STANDOUT_ID = 'standout';
const PREMIUM_ID = 'premium';

const classic = {
  id : CLASSIC_ID,
  name : 'Classic Ad',
  description: 'Offers the most basic level of advertisement',
  price: 269.99
 };

const standout = {
  id : STANDOUT_ID,
  name : 'Standout Ad',
  description: 'Allows advertisers to use a company logo and use a longer presentation text',
  price: 322.99
};

const premium = {
  id : PREMIUM_ID,
  name : 'Premium Ad',
  description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
  price: 394.99
};

const products = [classic, standout, premium];

export {
  CLASSIC_ID,
  STANDOUT_ID,
  PREMIUM_ID,
  products
};
