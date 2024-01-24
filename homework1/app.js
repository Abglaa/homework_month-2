//1 сфера medic

var cardMedical = "Пациент Муха болел: Ангина,Covid-19"
//Медицинская карта историй болезней

var medicalInsurance = 3000
//Размер медицинской страховки

var healthInsuranceApproval = true
//Одобрение медицинской страховки

//2 microCredit 1 000 000

let microCreditCompany = prompt("Введите сумму которую вы хотите до 1 000 000")

if (microCreditCompany <= 1000000){
    alert("Поздравляем вас с получением кредита в размере: " + microCreditCompany + "c")
}else{
    alert("Вы превысили сумму в 1 000 000")
}


//3 person's gender

let personGender = prompt("Ваш пол Женский или Мужской")

if (personGender === "Женский"){
    console.log("Добро пожаловать в нашу клинику!!!")
}else {
    console.log("Очень жаль, но вы можете пригласить к нам маму, сестру, жену, тетю или подругу!!!")
}
