var NAME = require('./src/fake/data-fr').NAME;
var getIntRandom = require('./src/random');
const maxMale = NAME.firstname.male.length - 1
const maxFemale = NAME.firstname.female.length - 1
const maxLastname = NAME.lastname.length - 1
const maxTitleMale = NAME.title.male.length - 1
const maxTitleFemale = NAME.title.female.length - 1

console.log('maxMale :>> ', maxMale);
console.log('maxFemale :>> ', maxFemale);
console.log('maxLastname :>> ', maxLastname);
console.log('maxTitleMale :>> ', maxTitleMale);
console.log('maxTitleFemale :>> ', maxTitleFemale);

const NAME_MALE_FIRSTNAME = () => NAME.firstname.male[getIntRandom(0,maxMale)]
const NAME_FEMALE_FIRSTNAME = () => NAME.firstname.female[getIntRandom(0,maxFemale)]
const NAME_LASTNAME = () => NAME.lastname[getIntRandom(0, maxLastname)]
const NAME_MALE_TITLE = () => NAME.title.male[getIntRandom(0, maxTitleMale)]
const NAME_FEMALE_TITLE = () => NAME.title.female[getIntRandom(0, maxTitleFemale)]

const TYPES = [
    'FIRSTNAME',
    'LASTNAME',
    'TITLE',
    'MALE',
    'FEMALE'
]

const CONSTANTS = {
    FIRSTNAME: TYPES[0],
    LASTNAME:TYPES[1],
    TITLE:TYPES[2],
    MALE:TYPES[3],
    FEMALE:TYPES[4]
}

const generator = {
    MALE:{
        FIRSTNAME: NAME.firstname.male[getIntRandom(0, maxMale)],
        TITLE: NAME.title.male[getIntRandom(0, maxTitleMale)]
    },
    FEMALE:{
        FIRSTNAME:  NAME.firstname.female[getIntRandom(0, maxFemale)],
        TITLE:  NAME.title.female[getIntRandom(0, maxTitleFemale)]
    },
    LASTNAME:  NAME.lastname[getIntRandom(0, maxLastname)],
}

console.log('generator.male[CONSTANTS.FIRSTNAME] :>> ', generator[CONSTANTS.MALE][CONSTANTS.FIRSTNAME]);

function generateByFormat(format='',sex){
    const listFormat = format.split('*');
    let result = String('');
    for(let type of listFormat){
        if(TYPES.findIndex(index=>index===type)!=-1){
            switch (type) {
                case CONSTANTS.FIRSTNAME:
                    result+=generator[sex][type]+' '
                    break;
                case CONSTANTS.TITLE:
                    result+=generator[sex][type]+' '
                    break;
                default:
                    result+=generator[type]+' '
                    break;
            }
        }
        else result += type
    }
    return result
}

console.log("generateByFormat(`${CONSTANTS.FIRSTNAME}*  *${CONSTANTS.LASTNAME}`,CONSTANTS.FEMALE) :>> ", generateByFormat(`${CONSTANTS.TITLE}*${CONSTANTS.FIRSTNAME}*${CONSTANTS.LASTNAME}`, CONSTANTS.FEMALE));