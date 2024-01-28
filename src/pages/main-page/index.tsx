import { Tabs } from '@mantine/core';
import { RiContrastDropLine, RiLoopLeftLine } from "@remixicon/react";
import { Outlet } from 'react-router-dom';
import UseEffectPage from '../hooks-pages/useEffect';
import UseStatePage from '../hooks-pages/useState';

function MainPage() {
  const size = 16
  const color = '#788AEB'
  const tabData = [
    {
      tab_value: 'useState',
      tab_inner_text: 'UseState',
      panel: <UseStatePage />,
      icon: <RiContrastDropLine size={size} color={color} />
    },
    {
      tab_value: 'useEffect',
      tab_inner_text: 'UseEffect',
      panel: <UseEffectPage />,
      icon: <RiLoopLeftLine size={size} color={color} />
    },
  ]
  return (
    <div className="p-2">
      <h2 className="p-2 text-center text-base font-bold uppercase">Học React Hooks</h2>
      <Tabs variant="outline" defaultValue={tabData[0].tab_value}>

        <Tabs.List>
          {
            tabData.map((tab, i) => {
              return (
                <Tabs.Tab value={tab.tab_value} leftSection={tab.icon} key={i}>
                  {tab.tab_inner_text}
                </Tabs.Tab>
              )
            })
          }
        </Tabs.List>

        {
          tabData.map((tab, i) => {
            return (
              <Tabs.Panel value={tab.tab_value} key={i}>
                <div className="pt-3">
                  {tab.panel}
                </div>
              </Tabs.Panel>
            )
          })
        }
      </Tabs>
      <Outlet />
    </div>
  )
}

export default MainPage