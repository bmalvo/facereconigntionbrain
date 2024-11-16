type NavigationProps = {

  onRouteChange: (props: string) => void;
}

export const Navigation = ({ onRouteChange }: NavigationProps) => {

    return <>
      <nav style={{
        display: 'flex',
        justifyContent: 'flex-end'
        }}>
        <p onClick={() => onRouteChange('singin')} className="f3 link dim black underline pa3 pointer">Sing out</p>    
      </nav>
    </>
}