type Rank = {
  name: string;
  entries: number;
}

export const Rank = ({ name, entries }: Rank) => {

  return <>
    <div>
      <div className="white f3" style={{
        textAlign: 'center'
      }}>
        {`${name} your current rank is...`}
      </div>
      <div className="white f1" style={{
        textAlign: 'center'
      }}>
        {entries}
      </div>
    </div>
  </>
}