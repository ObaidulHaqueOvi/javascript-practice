const names =['obaidul', 'haque', 'ovi','obaidul', 'haque', 'ovi','obaid', 'haq', 'ov'];

function DuplicateItemRemove(name)
{
    const valid = [];
    for(const element of name)
    {
        //console.log(element);
        if(valid.indexOf(element)==-1)
        {
            valid.push(element);
            
            
        }
    }

    console.log(valid);
}

//const result = DuplicateItemRemove(names);

//console.log(result);

DuplicateItemRemove(names);

const str = 'Meghna Life Securities and Investment Ltd.';
const strv = str.length;
console.log(strv[0]);



