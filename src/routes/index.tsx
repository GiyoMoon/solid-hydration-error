import { FlowComponent, children, Show } from 'solid-js';
import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <ComponentWithResolvedChildren>
        <div>My children</div>
      </ComponentWithResolvedChildren>
    </main>
  );
}

const ComponentWithResolvedChildren: FlowComponent = (props) => {
  const resolvedChildren = children(() => props.children)

  return <Show when={false}>{resolvedChildren()}</Show>
}
