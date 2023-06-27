import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useStore from '../../hooks/use-store';
import useInit from '../../hooks/use-init';
import useSelector from '../../hooks/use-selector';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import Preloader from '../Preloader/Preloader';


const PageLayout = ({children}) => {

  const store = useStore();

  useInit(() => {
    store.actions.categories.getCategories();
  }, []);

  const select = useSelector(state => ({
    categories: state.categories.categories,
    waiting: state.categories.waiting
  }));

  return (
    <div>
      {
        select.waiting? (
          <Preloader />
        ) : (
          <>
            <LangSwitcher />
            <Header categories={select.categories}/>
              {children}
            <Footer categories={select.categories}/>
          </>
        )
      }
    </div>
  );
};

export default PageLayout;