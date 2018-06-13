import isEmail from 'validator/lib/isEmail';

export function email(value) {
    if (!value) {
        return;
    }

    if (isEmail(value)) {
        return;
    }

   return "The email address must be in xxx@yyy.zzz format"
}

export function required(value) {
   if (value) {
       return;
   }

   return "The value is required"
}

export function multiple(validators) {
    return (function(value) {
        let error;
        validators.find(validator => {
            error = validator(value); 
            return error
        })
        return error
    }.bind(this));
}
    

