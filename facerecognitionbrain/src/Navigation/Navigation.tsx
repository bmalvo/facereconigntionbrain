type NavigationProps = {

  onRouteChange: (props: string) => void;
  isSignedIn: boolean;
}
export const Navigation = ({ onRouteChange, isSignedIn }: NavigationProps) => {

  return <>
    {(isSignedIn) ?
      <nav style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer">Sing out</p>
      </nav>
      :
      <nav style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sing in</p>
        <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
      </nav>}
    </>
}