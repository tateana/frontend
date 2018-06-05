import isEmail from 'validator/lib/isEmail';

export function email(value) {
    console.log('here');
    console.log('value');
   if (isEmail('foo@bar.com')) {
       return null;
   }

   "The email address must be in xxx@yyy.zzz format"
}
    

