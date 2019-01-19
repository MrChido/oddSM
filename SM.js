//html asset link
const pSet= document.getElementById('set');
const campSkill =document.getElementById('skill6');


//javascript do something
/*campSkill.addEventListener('dblclick', ()=>{
	skill6.disabled=false;
});*/

pSet.addEventListener('click', ()=>{
	//Item and aditional skill modifiers	
	if (parLevel.value =='Lv1') {
	//aItems.value ='1';
	//aItems.disabled =true;
	Aitem1.hidden=false;
		Aitem2.hidden=true;
		Aitem3.hidden=true;
		Aitem4.hidden=true;
		Aitem5.hidden=true;
		Aitem6.hidden=true;
		Aitem7.hidden=true;
	skill4.disabled =true;
	skill3.disabled =true;
	skill5.disabled=true;
	skill1.disabled =false;
	skill2.disabled = false;
	}
	if (parLevel.value =='Lv2') {
	//aItems.value ='3';
	//aItems.disabled=true;
	Aitem1.hidden=false;
		Aitem2.hidden=false;
		Aitem3.hidden=false;
		Aitem4.hidden=true;
		Aitem5.hidden=true;
		Aitem6.hidden=true;
		Aitem7.hidden=true;
	skill4.disabled=true;
	skill5.disabled= true;
	skill3.disabled =false;
	skill2.disabled= false;
	skill1.disabled=false;
	}
	if (parLevel.value == 'Lv3') {
		//aItems.value='5';
		//aItems.disabled=true;
		Aitem1.hidden=false;
		Aitem2.hidden=false;
		Aitem3.hidden=false;
		Aitem4.hidden=false;
		Aitem5.hidden=false;
		Aitem6.hidden=true;
		Aitem7.hidden=true;
		skill5.disabled=true;
		skill4.disabled=false;
		skill3.disabled=false;
		skill2.disabled= false;
		skill1.disabled= false;
		}
	if (parLevel.value == 'Lv4') {
		//aItems.value= '7';
		//aItems.disabled=true;
		Aitem1.hidden=false;
		Aitem2.hidden=false;
		Aitem3.hidden=false;
		Aitem4.hidden=false;
		Aitem5.hidden=false;
		Aitem6.hidden=false;
		Aitem7.hidden=false;
		skill1.disabled = false;
		skill2.disabled= false;
		skill3.disabled=false;
		skill4.disabled=false;
		skill5.disabled=false;
		}
// Class setups
if (pClass.value=='hunter') {
	aValue.value='3';
	sValue.value='3';
	mValue.value='1';
	hValue.value='5';
	}
if(pClass.value=='slayer'){
	aValue.value='2';
	sValue.value='4';
	mValue.value='1';
	hValue.value='5';
	}
if(pClass.value=='warden'){
	aValue.value='4';
	sValue.value='1';
	mValue.value='2';
	hValue.value='5';
	}
if(pClass.value=='caliana'){
	aValue.value='1';
	sValue.value='1';
	mValue.value='4';
	hValue.value='0';
	}
if(pClass.value=='druid'){
	aValue.value='1';
	sValue.value='2';
	mValue.value='4';
	hValue.value='5';
	}
if(pClass.value=='alchemist'){
	aValue.value='2';
	sValue.value='2';
	mValue.value='3';
	hValue.value='5';
	}
if(pClass.value=='warrior'){
	aValue.value='4';
	sValue.value='2';
	mValue.value='1';
	hValue.value='5';
	}
if(pClass.value=='archer'){
	aValue.value='2';
	sValue.value='3';
	mValue.value='2';
	hValue.value='5';
	}
if(pClass.value=='mage'){
	aValue.value='1';
	sValue.value='2';
	mValue.value='4';
	hValue.value='5';
	}
if(pClass.value=='rouge'){
	aValue.value='1';
	sValue.value='4';
	mValue.value='2';
	hValue.value='5';
	}
if(pClass.value=='paladin'){
	aValue.value='3';
	sValue.value='1';
	mValue.value='3';
	hValue.value='5';
	}
});