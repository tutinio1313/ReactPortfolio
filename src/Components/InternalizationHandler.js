import ES from './Localization/ES.json';
import EN from './Localization/EN.json';

export default function Internazilation(Language,ID) {
      let Text = (Language.includes('es') ? ES : EN); 
      
      for(const[key, value] of Object.entries(Text))
      {
            //console.log(key);
            console.log(value);

            value.find((item) => console.log(item));
      }

      return 'abc';      
}
