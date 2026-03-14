import yukCar from "../assets/yukCar.svg";
import time from "../assets/time.svg";
import yes from "../assets/yes.svg";
import no from "../assets/no.svg";

export const mock = [
    { id: 73456, nomi: "Premium Motors", shaxs: "Akmal Valiev", tel: "+998 90 123 45 67", manzil: "Toshkent", status: "Faol", tanlandi: true },
    { id: 29871, nomi: "Avto Lider", shaxs: "Dilshod Karimov", tel: "+998 93 987 65 43", manzil: "Samarqand", status: "Faol", tanlandi: true },
    { id: 55432, nomi: "Mega Avto", shaxs: "Farida Azimova", tel: "+998 91 321 98 76", manzil: "Buxoro", status: "Faol emas", tanlandi: true },
    { id: 88901, nomi: "Vodiy Auto Trade", shaxs: "Olimjon Rashidov", tel: "+998 94 456 12 34", manzil: "Farg'ona", status: "Faol", tanlandi: false },
    { id: 73556, nomi: "Premium Motors", shaxs: "Akmal Valiev", tel: "+998 90 123 45 67", manzil: "Toshkent", status: "Faol", tanlandi: true },
    { id: 27871, nomi: "Avto Lider", shaxs: "Dilshod Karimov", tel: "+998 93 987 65 43", manzil: "Samarqand", status: "Faol", tanlandi: true },
    { id: 47812, nomi: "Mega Avto", shaxs: "Farida Azimova", tel: "+998 91 321 98 76", manzil: "Buxoro", status: "Faol emas", tanlandi: true },
    { id: 81401, nomi: "Vodiy Auto Trade", shaxs: "Olimjon Rashidov", tel: "+998 94 456 12 34", manzil: "Farg'ona", status: "Faol", tanlandi: false },
    { id: 11102, nomi: "Debuggers", shaxs: "Ogabek Huramov", tel: "+998 90 123 45 67", manzil: "Toshkent", status: "Faol", tanlandi: true },
    { id: 29771, nomi: "Dev Quiz", shaxs: "Umid Samadov", tel: "+998 93 987 65 43", manzil: "Samarqand", status: "Faol", tanlandi: true },
    { id: 73432, nomi: "Mega", shaxs: "Bekali Muminov", tel: "+998 91 321 98 76", manzil: "Buxoro", status: "Faol emas", tanlandi: true },
    { id: 81101, nomi: "28 Quiz", shaxs: "Javohir Hasanov", tel: "+998 94 456 12 34", manzil: "Farg'ona", status: "Faol", tanlandi: false },
    { id: 32101, nomi: "Arzon Bozor", shaxs: "Sherzod Toshmatov", tel: "+998 91 234 56 78", manzil: "Toshkent", status: "Faol", tanlandi: true },
    { id: 44521, nomi: "Osiyo Savdo", shaxs: "Nodira Yusupova", tel: "+998 93 345 67 89", manzil: "Samarqand", status: "Faol", tanlandi: true },
    { id: 56231, nomi: "Baraka Market", shaxs: "Jasur Mirzayev", tel: "+998 90 456 78 90", manzil: "Buxoro", status: "Faol emas", tanlandi: false },
    { id: 67341, nomi: "Nur Savdo", shaxs: "Malika Ergasheva", tel: "+998 94 567 89 01", manzil: "Farg'ona", status: "Faol", tanlandi: true },
    { id: 78451, nomi: "Hamkor Biznes", shaxs: "Otabek Nazarov", tel: "+998 91 678 90 12", manzil: "Toshkent", status: "Faol", tanlandi: true },
    { id: 89561, nomi: "Gulbahor Savdo", shaxs: "Zulfiya Holmatova", tel: "+998 93 789 01 23", manzil: "Samarqand", status: "Faol emas", tanlandi: false },
    { id: 90671, nomi: "Sarbon Group", shaxs: "Behruz Xasanov", tel: "+998 90 890 12 34", manzil: "Buxoro", status: "Faol", tanlandi: true },
    { id: 12781, nomi: "Texno Savdo", shaxs: "Kamola Razzaqova", tel: "+998 94 901 23 45", manzil: "Farg'ona", status: "Faol", tanlandi: true },
    { id: 23891, nomi: "Ipak Yo'li", shaxs: "Sanjar Qodirov", tel: "+998 91 012 34 56", manzil: "Toshkent", status: "Faol emas", tanlandi: false },
    { id: 34901, nomi: "Yangi Dunyo", shaxs: "Dilnoza Tursunova", tel: "+998 93 123 45 67", manzil: "Samarqand", status: "Faol", tanlandi: true },
    { id: 45011, nomi: "Mustaqil Savdo", shaxs: "Alisher Xoliqov", tel: "+998 90 234 56 78", manzil: "Buxoro", status: "Faol", tanlandi: true },
    { id: 56121, nomi: "Baxt Bozori", shaxs: "Shahnoza Aminova", tel: "+998 94 345 67 89", manzil: "Farg'ona", status: "Faol emas", tanlandi: false },
    { id: 67231, nomi: "Oltin Bozor", shaxs: "Firdavs Usmonov", tel: "+998 91 456 78 90", manzil: "Toshkent", status: "Faol", tanlandi: true },
    { id: 78341, nomi: "Mehr Savdo", shaxs: "Mohira Salimova", tel: "+998 93 567 89 01", manzil: "Samarqand", status: "Faol", tanlandi: true },
    { id: 89451, nomi: "Zafar Market", shaxs: "Doniyor Rahimov", tel: "+998 90 678 90 12", manzil: "Buxoro", status: "Faol emas", tanlandi: false },
    { id: 90561, nomi: "Farovon Savdo", shaxs: "Nargiza Karimova", tel: "+998 94 789 01 23", manzil: "Farg'ona", status: "Faol", tanlandi: true },
    { id: 11671, nomi: "Umid Biznes", shaxs: "Eldor Toshpulatov", tel: "+998 91 890 12 34", manzil: "Toshkent", status: "Faol", tanlandi: true },
    { id: 22781, nomi: "Shams Savdo", shaxs: "Gulnora Hasanova", tel: "+998 93 901 23 45", manzil: "Samarqand", status: "Faol emas", tanlandi: false },
]



export const stats = [
    { image: yukCar, label: "Barcha yetkazib berishlar", value: "1,420", change: "+5.2% o'tgan oyga nisbatan", up: true },
    { image: time, label: "Jarayonda", value: "85", change: "+3 bugun qo'shilgan", up: true },
    { image: yes, label: "Yetkazilgan", value: "1,289", change: "+8.2% o'tgan oyga nisbatan", up: true },
    { image: no, label: "Bekor qilingan", value: "46", change: "-1.5% o'tgan oyga nisbatan", up: false },
]


export const mock2 = [
    { id: "#DLV-001254", sana: "2024-07-21", jonatuvchi: "Asosiy ombor", qabul: "Diler: Aziz Ahmedov", mahsulot: "Coca-Cola, Oreo...", miqdor: 150, status: "Yetkazilgan" },
    { id: "#DLV-001253", sana: "2024-07-20", jonatuvchi: "Diler: Aziz Ahmedov", qabul: "Do'kon: Korzinka", mahsulot: "Sultan Choy (qora)", miqdor: 50, status: "Yo'lda" },
    { id: "#DLV-001252", sana: "2024-07-20", jonatuvchi: "Asosiy ombor", qabul: "Diler: Sardor Komilov", mahsulot: "Alpen Gold, Oreo", miqdor: 80, status: "Yetkazilgan" },
    { id: "#DLV-001251", sana: "2024-07-19", jonatuvchi: "Diler: Aziz Ahmedov", qabul: "Do'kon: Makro", mahsulot: "Nestle Sut 1L", miqdor: 200, status: "Bekor qilinga" },
    { id: "#DLV-001250", sana: "2024-07-18", jonatuvchi: "Asosiy ombor", qabul: "Diler: Aziz Ahmedov", mahsulot: "Sultan Choy (yashil)", miqdor: 40, status: "Yetkazilgan" },
    { id: "#DLV-001249", sana: "2024-07-18", jonatuvchi: "Diler: Sardor Komilov", qabul: "Do'kon: Havas", mahsulot: "Coca-Cola", miqdor: 500, status: "Tayyorlanmo" },
]