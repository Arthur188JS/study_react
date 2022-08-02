const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = employers.filter(item => item.trim() !== '').map(item => item.trim()[0].toUpperCase() + item.trim().slice(1).toLowerCase());

const data = {
    cash: [3, 8, 3],
    react: ['JSX', 'components', 'props', 'state', 'hooks'],
    add: ['styled-components', 'firebase']
};

const {cash, react, add} = data;

const calcCash = item => item.reduce((prev, curr) => prev + curr);

const lesson = calcCash(cash);

const arrData = {
    director: 'Артем',
    lesson,
    command,
    nameCourse,
    teacher: 'Максим'
};

const makeBusiness = (data) => {
    const {director, lesson: allModule, command: gang, nameCourse: course, teacher} = data;
    const sumTech = [...react, ...add, 'и другие'];

    console.log(`
    Стартуем новый курс: "${course}". 
    Владелец: ${director}, преподаватель: ${teacher}. 
    Всего уроков: ${allModule}.
    Команда Академии: ${gang}
    Первое что изучим будет ${react[0]}". Он очень похож на HTML!
    Технологии которые мы изучим: ${sumTech}
    `);
}

makeBusiness(arrData);
