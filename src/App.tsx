import React from 'react';
import logo from './logo.svg';
import MemberCard from "./MemberCard"
import './App.css';


export interface team {
    id?: number
    name: string
    job: string
    description: string
    img: string
}

const teams: {id: number, name: string, job: string, description: string, img: string}[] = [
    { id: 1, name: "Ямщиков Владимир", job: "Руководитель проекта", description: "Разработал кучу всего, несмотря на то, что у него лапки.", img: './members/Владимир.jpg' },
    { id: 2, name: "Тамерлан Алиев", job: "Фронтенд-разработчик", description: "Разработал кучу всего, несмотря на то, что у него лапки.", img: './members/Тамерлан.jpg' },
    { id: 3, name: "Вадим Колесников", job: "Бекенд-разработчик", description: "Разработал кучу всего, несмотря на то, что у него лапки.", img: './members/Вадим.jpg' },
    { id: 4, name: "Сергей Панарин", job: "Бекенд-разработчик", description: "Разработал кучу всего, несмотря на то, что у него лапки.", img: './members/Сергей.jpg' }]
const Comands = () => {
  return (
    <div className="Comands_div">
        <header className="header">
            <nav className="headerContent">
                <img className="logo" src="./images/Logo.svg" alt="NETI_IT"/>
                <div className="header_nav">
                    <ul>
                        <li>
                            <a href="#">Главная</a>
                        </li>
                        <li>
                            <a href="#">Новости/Блог</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Проекты</a>
                        </li>
                        <li>
                            <a href="#">
                                ● Команды
                            </a>
                        </li>
                        <li>
                            <a href="#">Сообщество</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </div>
                <a className="button" aria-label="Icon-only Button" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <g clip-path="url(#clip0_168_263)">
                            <path d="M34.9492 34.9492C34.636 35.2627 34.264 35.5114 33.8546 35.681C33.4451 35.8507 33.0063 35.938 32.5631 35.938C32.1199 35.938 31.6811 35.8507 31.2717 35.681C30.8623 35.5114 30.4903 35.2627 30.177 34.9492L24.2212 28.9935C21.771 30.5617 18.8752 31.5 15.75 31.5C7.0515 31.5 0 24.4485 0 15.75C0 7.0515 7.0515 0 15.75 0C24.4485 0 31.5 7.0515 31.5 15.75C31.5 18.8752 30.5617 21.771 28.9935 24.2212L34.9492 30.177C35.2627 30.4903 35.5114 30.8623 35.681 31.2717C35.8507 31.6811 35.938 32.1199 35.938 32.5631C35.938 33.0063 35.8507 33.4451 35.681 33.8546C35.5114 34.264 35.2627 34.636 34.9492 34.9492ZM15.75 4.5C9.53775 4.5 4.5 9.5355 4.5 15.75C4.5 21.9645 9.53775 27 15.75 27C21.9645 27 27 21.9645 27 15.75C27 9.5355 21.9645 4.5 15.75 4.5Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_168_263">
                                <rect width="36" height="36" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a className="button" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_168_260)">
                            <path d="M20.0007 3.33325C10.7923 3.33325 3.33398 10.7916 3.33398 19.9999C3.33398 29.2083 10.7923 36.6666 20.0007 36.6666C29.209 36.6666 36.6673 29.2083 36.6673 19.9999C36.6673 10.7916 29.209 3.33325 20.0007 3.33325ZM20.0007 8.33325C22.759 8.33325 25.0007 10.5749 25.0007 13.3333C25.0007 16.0999 22.759 18.3333 20.0007 18.3333C17.2423 18.3333 15.0007 16.0999 15.0007 13.3333C15.0007 10.5749 17.2423 8.33325 20.0007 8.33325ZM20.0007 31.9999C15.8257 31.9999 12.159 29.8666 10.0007 26.6333C10.0423 23.3249 16.6757 21.4999 20.0007 21.4999C23.3257 21.4999 29.9507 23.3249 30.0007 26.6333C27.8423 29.8666 24.1757 31.9999 20.0007 31.9999Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_168_260">
                                <rect width="40" height="40" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </nav>
        </header>
        <main className="main">
            <section className="teamTitle">
                <div className="socials">
                    <a className="socialItem" href="https://vk.com/neti_it">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect width="36" height="36" rx="18" fill="white"/>
                            <path d="M18.8839 24.3C12.119 24.3 8.26038 19.5702 8.09961 11.7H11.4882C11.5995 17.4765 14.0977 19.9234 16.0765 20.4279V11.7H19.2673V16.6819C21.2213 16.4675 23.2742 14.1972 23.9668 11.7H27.1576C26.8966 12.9951 26.3764 14.2214 25.6295 15.3022C24.8825 16.383 23.925 17.2949 22.8167 17.981C24.0538 18.608 25.1465 19.4953 26.0227 20.5845C26.8988 21.6737 27.5386 22.9401 27.8996 24.3H24.3873C24.0632 23.1188 23.4045 22.0615 22.4937 21.2605C21.5829 20.4595 20.4605 19.9505 19.2673 19.7972V24.3H18.8839V24.3Z" fill="#060922"/>
                        </svg>
                    </a>
                    <a className="socialItem" href="https://t.me/it_neti">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect width="36" height="36" rx="18" fill="white"/>
                            <path d="M25.1996 11.3421L22.4947 25.4631C22.4947 25.4631 22.1163 26.4422 21.0766 25.9726L14.8357 21.0174L14.8068 21.0028C15.6498 20.2189 22.1868 14.1324 22.4725 13.8566C22.9147 13.4293 22.6402 13.1749 22.1267 13.4977L12.4707 19.8477L8.74548 18.5497C8.74548 18.5497 8.15924 18.3338 8.10284 17.8642C8.0457 17.3939 8.76478 17.1396 8.76478 17.1396L23.9514 10.9701C23.9514 10.9701 25.1996 10.4022 25.1996 11.3421V11.3421Z" fill="#060922"/>
                        </svg>
                    </a>
                    <a className="socialItem" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <path d="M36 18C36 8.05887 27.9411 0 18 0V0C8.05887 0 0 8.05887 0 18V18C0 27.9411 8.05887 36 18 36V36C27.9411 36 36 27.9411 36 18V18Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.808 18.2047C26.808 17.5665 26.7507 16.9529 26.6444 16.3638H18.168V19.8451H23.0116C22.803 20.9701 22.1689 21.9233 21.2157 22.5615V24.8197H24.1243C25.8262 23.2529 26.808 20.9456 26.808 18.2047Z" fill="#060922"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1677 27C20.5978 27 22.635 26.1941 24.1241 24.8195L21.2155 22.5613C20.4096 23.1013 19.3787 23.4204 18.1677 23.4204C15.8236 23.4204 13.8396 21.8372 13.1318 19.71H10.125V22.0418C11.6059 24.9832 14.6496 27 18.1677 27Z" fill="#060922"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1321 19.7098C12.9521 19.1698 12.8498 18.593 12.8498 17.9998C12.8498 17.4067 12.9521 16.8298 13.1321 16.2898V13.958H10.1252C9.5157 15.173 9.16797 16.5476 9.16797 17.9998C9.16797 19.4521 9.5157 20.8267 10.1252 22.0417L13.1321 19.7098Z" fill="#060922"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1677 12.5796C19.4891 12.5796 20.6755 13.0336 21.6082 13.9255L24.1896 11.3441C22.6309 9.89182 20.5937 9 18.1677 9C14.6496 9 11.6059 11.0168 10.125 13.9582L13.1318 16.29C13.8396 14.1627 15.8236 12.5796 18.1677 12.5796Z" fill="#060922"/>
                        </svg>
                    </a>
                </div>
                <p className="teamText">Команды</p>
                <p className="teamDescription">Здесь представлены команды, работающие над своими проектами.</p>
            </section>
            <article className="teamBlock">
                <p className="teamBlockTitle">Команда GameDev разработки</p>
                <p className="teamBlockDescription">Наша цель — создание кроссплатформенной игры на языке C#. Мы стремимся сделать наш продукт производительным.</p>
                <p className="teamBlockDescription">В данный момент мы работаем над повышением оптимизации нашего приложения.</p>
            </article>
            <p className="groupTitle">Участники</p>
            <section className="members">
                {teams.map((team: team)=><MemberCard
                        name={team.name}
                        job={team.job}
                        description={team.description}
                        key={team.id}
                        img={team.img}
                    />
                )}
            </section>
            <p className="groupTitle">Проекты и достижения</p>
            <section className="Projects">
                <h2 className="ProjectsTitle">Название проекта</h2>
            </section>
            <section className="AimResult">
                <div className="AimResultText">
                    <div className="Aims">
                        <p className="groupTitle">Поставленные цели</p>
                        <p className="ARText">Наша цель — поймать как можно больше крыс в подвале.
                            Мы настоящие охотники, которые будут стремиться достичь неведанных высот.</p>
                        <p className="ARText">Мы работаем над новейшей системой ловлей мышей с помощью технологий AI.</p>
                    </div>
                    <div className="Results">
                        <p className="groupTitle">Результаты</p>
                        <p className="ARText">Наша цель — поймать как можно больше крыс в подвале.
                            Мы настоящие охотники, которые будут стремиться достичь неведанных высот.</p>
                        <p className="ARText">Мы работаем над новейшей системой ловлей мышей с помощью технологий AI.</p>
                    </div>
                </div>
                <img className="GPT" src="./images/GPT.svg" alt="ChatGPT"/>
            </section>
            <article className="teamBlock">
                <p className="teamBlockTitle">Команда GameDev разработки</p>
                <p className="teamBlockDescription">Наша цель — создание кроссплатформенной игры на языке C#. Мы стремимся сделать наш продукт производительным.</p>
                <p className="teamBlockDescription">В данный момент мы работаем над повышением оптимизации нашего приложения.</p>
            </article>
            <p className="groupTitle">Участники</p>
            <section className="members">
                {teams.map((team: team)=><MemberCard
                        name={team.name}
                        job={team.job}
                        description={team.description}
                        key={team.id}
                        img={team.img}
                    />
                )}
            </section>
            <p className="groupTitle">Проекты и достижения</p>
            <section className="Projects">
                <h2 className="ProjectsTitle">Название проекта</h2>
            </section>
            <section className="AimResult">
                <div className="AimResultText">
                    <div className="Aims">
                        <p className="groupTitle">Поставленные цели</p>
                        <p className="ARText">Наша цель — поймать как можно больше крыс в подвале.
                            Мы настоящие охотники, которые будут стремиться достичь неведанных высот.</p>
                        <p className="ARText">Мы работаем над новейшей системой ловлей мышей с помощью технологий AI.</p>
                    </div>
                    <div className="Results">
                        <p className="groupTitle">Результаты</p>
                        <p className="ARText">Наша цель — поймать как можно больше крыс в подвале.
                            Мы настоящие охотники, которые будут стремиться достичь неведанных высот.</p>
                        <p className="ARText">Мы работаем над новейшей системой ловлей мышей с помощью технологий AI.</p>
                    </div>
                </div>
                <img className="GPT" src="./images/GPT.svg" alt="ChatGPT"/>
            </section>
        </main>
        <footer className="footer">
            <div className="footerCopyright">
                <img className="footerCopyrightLogo" src="./images/logo.svg" alt="NETI IT"/>
                <p className="footerCopyrightDesc">NETI IT - место, где любой IT стартап становится реальностью.</p>
                <p className="footerCopyrightText">©NETI IT, 2023. Все права защищены</p>
            </div>
            <div className="footerWrapper">
                <div className="footerNav">
                    <h4 className="footerNavTitle">Разделы сайта</h4>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Проекты</a></li>
                        <li><a href="#">Команда</a></li>
                        <li><a href="#">Сообщество</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
                <div className="footerNav">
                    <h4 className="footerNavtTitle">Контакты</h4>
                    <ul>
                        <li><a href="#">+7 913 777-77-77</a></li>
                        <li><a href="#">netiit@gmail.com</a></li>
                        <li><a href="#">Новосибирск, Россия, Блюхера 32</a></li>
                        <li><a href="#">Мы в соцсетях:</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Comands;
