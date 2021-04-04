const data = [
    {
        id: "101",
        nombre: "Andrea Lourdes Lopez",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Junta directiva - Directora ejecutiva -Equipo de formación"
    },

    {
        id: "102",
        nombre: "Luis López",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Junta directiva"
    },
    {
        id: "103",
        nombre: "Marco Sagastume",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Junta directiva"
    },
    {
        id: "104",
        nombre: "Rodrigo Vargas",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
            cargo: "Junta directiva"
    },
    {
        id: "105",
        nombre: "Patricia Véliz",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Junta directiva"
    },
    {
        id: "115",
        nombre: "Marce Guevara",
        img: "./images/equipo/marceGuevara_Mesa de trabajo 1.png",
        cargo: "Dirección de investigación de dpto. de Escuintla"
    },
    {
        id: "106",
        nombre: "Nahomy Hernández",
        img: "./images/equipo/nahomy_Mesa de trabajo 1.png",
        cargo: "Dirección de alianzas"
    },
    {
        id: "107",
        nombre: "Gabriela Gaytán",
        img: "./images/equipo/gabielaGaytan_Mesa de trabajo 1.png",
        cargo: "Dirección de comunicaión - Equipo de comunicación"
    },    
    {
        id: "108",
        nombre: "Jessica Gomez",
        img: "./images/equipo/jesicaGomez_Mesa de trabajo 1.png",
        cargo: "Coordinación de Webinars -Equipo de Alianzas"
    },
    {
        id: "109",
        nombre: "Alaide Iguardia",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Coordinación de foros -Equipo de proyectos"
    },
    {
        id: "110",
        nombre: "Eunice Lemus",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Coordinación de foros -Equipo de proyectos"
    },
    {
        id: "111",
        nombre: "Susana Balcárcel",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de comunicación"
    },
    {
        id: "112",
        nombre: "Melanie Lopez",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de comunicación"
    },
    {
        id: "113",
        nombre: " Carolina Rabe",
        img: "./images/equipo/CarolinaRabe_Mesa de trabajo 1.png",
        cargo: "Equipo de comunicación"
    },
    {
        id: "114",
        nombre: "Andrea Gonzalez",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de cominucacion"
    },
    {
        id: "5",
        nombre: "Karla Zuñiga",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de cominucacion"
    },
    {
        id: "6",
        nombre: "Cynthia Paola",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de cominucacion"
    },
    {
        id: "7",
        nombre: "Alejandra Lopez",       
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de proyectos"
    },
    {
        id: "8",
        nombre: "Wendy Orozco",
        img: "./images/equipo/wendyOrozco_Mesa de trabajo 1.png",
        cargo: "Equipo de proyectos -Embajadora en San Marcos, San pedro, Sacatepéquez"
    },
    {
        id: "9",
        nombre: "Ana Mux",       
        img: "./images/equipo/AnaMux_Mesa de trabajo 1.png",
        cargo: "Equipo de proyectos -Embajadora en Guatemala, Santa Catarina, Pinula"
    },
    {
        id: "10",
        nombre: "Alejandra Teleguardio",
        img: "./images/equipo/AlejandraTelegario_Mesa de trabajo 1.png",
        cargo: "Equipo de proyectos -Embajadora en Quetzaltenango"
    },    
    {
        id: "11",
        nombre: "Gerson Upún ",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de proyectos"
    },
    {
        id: "12",
        nombre: "Ilse Cua",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas"
    },
    {
        id: "15",
        nombre: "Ana Cecilia Paiz",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas -Embajadora en San Marcos, San pedro, Sacatepéquez"
    },
    {
        id: "16",
        nombre: "Estefany Ruiz",
        img: "./images/equipo/estefanyRuiz_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas"
    },
    {
        id: "17",
        nombre: "Yamileth Ventura",
        img: "./images/equipo/yamiletVentura_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas"
    },
    {
        id: "18",
        nombre: "Vanessa Campos",
        img: "./images/equipo/vanesaCampos_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas"
    },
    {
        id: "19",
        nombre: "Jeimy Martinez",
        img: "./images/equipo/jeimiMartinez_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas e investigación"
    },
    {
        id: "21",
        nombre: "Angela López",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas e investigación"
    },
    {
        id: "22",
        nombre: "Alejandra Patal",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas e investigación"
    },
    {
        id: "23",
        nombre: "Sindy Guevara",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas e investigación"
    },
    {
        id: "24",
        nombre: "Diego Taracena",
        img: "./images/equipo/diegoTaracena_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas e investigación"
    },{
        id: "25",
        nombre: "Gabriela Pineda",
        img: "./images/equipo/gabrielaPineda_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas e investigación"
    },{
        id: "26",
        nombre: "Alejandro N´oj",
        img: "./images/equipo/alejandroNoj_Mesa de trabajo 1.png",
        cargo: "Equipo de Alianzas e investigación"
    },{
        id: "27",
        nombre: "Linda Alay",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de formación"
    },
    {
        id: "28",
        nombre: "Valentina Contreras",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de formación"
    },
    {
        id: "29",
        nombre: "Francis Navas",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de formación"
    },
    {
        id: "30",
        nombre: "Ivonne Plascencia",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de formación"
    },
    {
        id: "31",
        nombre: "Andrea Reyes",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de formación"
    },
    {
        id: "32",
        nombre: "Susana Yuman",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Equipo de formación"
    },
    {
        id: "33",
        nombre: "Elida Judith López",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Embajadora en Sololá, San Andrés, Semetabaj"
    },
    {
        id: "34",
        nombre: "Maria Isabel Bautista",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Embajadora en San Marcos – San pedro – Sacatepéquez"
    },
    {
        id: "35",
        nombre: "Zaira Gabriela Xicay",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Embajadora en Guatemala, Sacatepéquez, Antigua Guatemala"
    },
    {
        id: "36",
        nombre: "Elizabeth Chavez López",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Embajadora en Guatemala, Sacatepéquez, San Antonio AC"
    },
    {
        id: "37",
        nombre: "Paolo Giovanni Mendoza",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Embajador en Guatemala, San Miguel, Petapa"
    },
    {
        id: "38",
        nombre: "Ramón López Tambriz",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Embajador en Sololá, Nahualá"
    },
    {
        id: "39",
        nombre: "Carlos Humberto Vicente",
        img: "./images/equipo/andreaLopez_Mesa de trabajo 1.png",
        cargo: "Embajador en Alta verapáz, Tamahú"
    }  
];
export default data;
