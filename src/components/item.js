class Riddle{
    constructor(id, description, option1, option2, option3, option4, correct){
        this.id=id;
        this.description=description
        this.option1=option1;
        this.option2=option2;
        this.option3=option3;
        this.option4=option4;
        this.correct=correct;
    }
} 
const Item = ()=>{
const riddles = [new Riddle(1, "Чем является арбуз?", "Фрукт", "овощь", "ягода", "человек", "ягода"),new Riddle(2,"Какой гриб самый ядовитый?","поганка","мухомор","лисичка","опята","мухомор"),new Riddle(3,"Сколько копеек в 1 рубле?",10,100,1000,60,100)];
const items=     riddles.map(riddle => <div>  <li>{riddle.description}</li>
<input type="radio" id={riddle.option1} name={riddle.id} value={riddle.option1} checked />
    <label for={riddle.option1}>{riddle.option1}</label>
<input type="radio" id={riddle.option2} name={riddle.id} value={riddle.option2} checked />
    <label for={riddle.option2}>{riddle.option2}</label>
<input type="radio" id={riddle.option3} name={riddle.id} value={riddle.option3} checked />
    <label for={riddle.option3}>{riddle.option3}</label>
<input type="radio" id={riddle.option4} name={riddle.id} value={riddle.option4} checked />
<label for={riddle.option4}>{riddle.option4}</label>
</div>
);
function maks() {
    
} 

return<>
<ul>{items}</ul>
<button onClick="alert(1)">
    Кнопочка
    </button>
</>         
}
export default Item