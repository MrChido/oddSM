//html asset link
const pSet= document.getElementById('set');
const campSkill= document.getElementById('skill6');
const NewSword= document.getElementById('nS');
const NewSpeed= document.getElementById('nP');
const NewMajik= document.getElementById('nM');
const NewHealth= document.getElementById('nH');
const NewPoison= document.getElementById('nO');
//javascript do something
/*campSkill.addEventListener('dblclick', ()=>{
	skill6.disabled=false;
});*/

NewSword.addEventListener('click',()=>{
	//new sword values
	if(aValue.value=='2'){
		swrd0.style.display='block'
		swrd1.style.display='block'
		swrd2.style.display='none'
		swrd3.style.display='none'
		swrd4.style.display='none'
		swrd5.style.display='none'
		swrd6.style.display='none'
		swrd7.style.display='none'
		swrd8.style.display='none'
		swrd8.style.display='none'
	}
});


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
		hDice.value='0';
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
		hDice.value='1';
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
		hDice.value='2';
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
		hDice.value='4';
		}
// Class setups
if (pClass.value=='hunter') {
	aValue.placeholder='3';
	sValue.placeholder='3';
	mValue.placeholder='1';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';
	swrd9.style.display='none';	
	mag1.style.display='none';
	mag2.style.display='none';
	mag3.style.display='none';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';

	}
if(pClass.value=='slayer'){
	aValue.placeholder='2';
	sValue.placeholder='4';
	mValue.placeholder='1';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd2.style.display='none';
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';	
	mag1.style.display='none';
	mag2.style.display='none';
	mag3.style.display='none';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';

	}
if(pClass.value=='warden'){
	aValue.placeholder='4';
	sValue.placeholder='1';
	mValue.placeholder='2';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd4.style.display='none';
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';
	mag1.style.display='true';
	mag2.style.display='none';
	mag3.style.display='none';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';
	
	}
if(pClass.value=='caliana'){
	aValue.placeholder='1';
	sValue.placeholder='1';
	mValue.placeholder='4';
	hValue.placeholder='0';
	swrd1.style.display='none';	
	swrd2.style.display='none';	
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';
	mag1.style.display='true';
	mag2.style.display='true';
	mag3.style.display='true';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';
	}
if(pClass.value=='druid'){
	aValue.placeholder='1';
	sValue.placeholder='2';
	mValue.placeholder='4';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd1.style.display='none';	
	swrd2.style.display='none';	
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';	
	mag1.style.display='true';
	mag2.style.display='true';
	mag3.style.display='true';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';
	}
if(pClass.value=='alchemist'){
	aValue.placeholder='2';
	sValue.placeholder='2';
	mValue.placeholder='3';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd2.style.display='none';	
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';	
	mag1.style.display='true';
	mag2.style.display='true';
	mag3.style.display='none';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';
	}
if(pClass.value=='warrior'){
	aValue.placeholder='4';
	sValue.placeholder='2';
	mValue.placeholder='1';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';	
	mag1.style.display='none';
	mag2.style.display='none';
	mag3.style.display='none';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';

	}
if(pClass.value=='archer'){
	aValue.placeholder='2';
	sValue.placeholder='3';
	mValue.placeholder='2';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd2.style.display='none';	
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';	
	mag1.style.display='block';
	mag2.style.display='none';
	mag3.style.display='none';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';
	}
if(pClass.value=='mage'){
	aValue.placeholder='1';
	sValue.placeholder='2';
	mValue.placeholder='4';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd1.style.display='none';	
	swrd2.style.display='none';	
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';	
	mag1.style.display='true';
	mag2.style.display='true';
	mag3.style.display='true';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';
	}
if(pClass.value=='rouge'){
	aValue.placeholder='1';
	sValue.placeholder='4';
	mValue.placeholder='2';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd1.style.display='none';	
	swrd2.style.display='none';	
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';	
	mag1.style.display='true';
	mag2.style.display='none';
	mag3.style.display='none';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';
	}
if(pClass.value=='paladin'){
	aValue.placeholder='3';
	sValue.placeholder='1';
	mValue.placeholder='3';
	hValue.placeholder='5';
	hrt5.style.display='none';
	hrt6.style.display='none';
	hrt7.style.display='none';
	hrt8.style.display='none';
	hrt9.style.display='none';
	swrd3.style.display='none';	
	swrd4.style.display='none';	
	swrd5.style.display='none';	
	swrd6.style.display='none';	
	swrd7.style.display='none';	
	swrd8.style.display='none';	
	swrd9.style.display='none';
	mag1.style.display='true';
	mag2.style.display='true';
	mag3.style.display='none';
	mag4.style.display='none';
	mag5.style.display='none';
	mag6.style.display='none';
	mag7.style.display='none';
	mag8.style.display='none';
	mag9.style.display='none';
	
	}
});