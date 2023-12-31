import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import { useState } from 'react';
import personalCard from '../Images/personalcard.svg';
import { FAQIcon } from '../Components/Icons/FaqIcon.jsx';
import { EditIcon } from '../Components/Icons/EditIcon.jsx';
import { Profile } from 'react';
export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={personalCard} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: 'Ćwiczenia',
      icon: <img src={EditIcon} alt="business card resume" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/excercise',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={personalCard} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={personalCard} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={FAQIcon} alt="business card resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);

  return (
    <div className="dashboard">
      <header>
        <h1>Hej! tu Ania!</h1>
        <p>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności
        </p>
      </header>
      <div className="links">
        {/* {availableCards.map((card, index) => {
          return (
            <DashboardCard
              key={index}
              sectionTitle={card.sectionTitle}
              description={card.description}
              link={card.link}
              icon={card.icon}
            />
          );
        })} */}
      </div>
      {/* <aside className="about-me">
        <Profile />
      </aside> */}
    </div>
  );
};
