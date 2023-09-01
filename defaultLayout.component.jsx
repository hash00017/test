import { Outlet } from 'react-router-dom';
import { Menu } from './components';
import './defaultLayout.styles.scss';
import { Grid, Drawer } from 'antd';
import { Header } from '../shared/index';
import { useState } from 'react';

const DefaultLayout = () => {
  const { useBreakpoint } = Grid;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const screens = useBreakpoint();
  return (
    <section className={'default-layout-grid'}>
      {screens.md ? (
        <Menu />
      ) : (
        <Drawer
          placement="right"
          bodyStyle={{ padding: '0px' }}
          onClose={onClose}
          open={open}
          headerStyle={{display: 'none'}}
        >
          <Menu />
        </Drawer>
      )}

      <div className="default-layout-right">
        <Header
          showDrawer={showDrawer}
          screens={screens}
        />
        <div className="default-layout-page-wrapper">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DefaultLayout;
