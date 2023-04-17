import ES from './Localization/ES.json';
import EN from './Localization/EN.json';

export default function Internazilation(ID) {
      let Text = (navigator.languages.includes('es') ? ES : EN); 
      for(let i = 0; i < Text.length;i++)
      {
            if(Text[i].id == ID)
            {
                  return Text[i].value;
            }
      }
      return null;          
}
