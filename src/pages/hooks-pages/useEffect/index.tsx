import { Tabs } from "@mantine/core"
import UseEffectGeneral from "./useEffect-general"
import UseEffectNoDeps from "./useEffect-no-deps"
import UseEffectEmptyDeps from "./useEffect-empty-deps"
import UseEffectWithDeps from "./useEffect-with-deps"
import UseEffectDOMEvent from "./advance/useEffect-DOM-event"

function UseEffectPage() {

  const tabData = [
    {
      tab_value: 'useEffect-general',
      tab_inner_text: 'General',
      panel: <UseEffectGeneral />,
      icon: '1. '
    },
    {
      tab_value: 'useEffect-no-deps',
      tab_inner_text: 'UseEffect No Deps',
      panel: <UseEffectNoDeps />,
      icon: '2. '
    },
    {
      tab_value: 'useEffect-empty-deps',
      tab_inner_text: 'UseEffect Empty Deps',
      panel: <UseEffectEmptyDeps />,
      icon: '3. '
    },
    {
      tab_value: 'useEffect-with-deps',
      tab_inner_text: 'UseEffect With Deps',
      panel: <UseEffectWithDeps />,
      icon: '4. '
    },
    {
      tab_value: 'useEffect-DOM-event',
      tab_inner_text: 'UseEffect DOM Event',
      panel: <UseEffectDOMEvent />,
      icon: '5. '
    },
  ]

  return (
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
  )
}


export default UseEffectPage