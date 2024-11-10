import { ChangeEvent } from "react";

interface ImageLinkFormProps {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onButtonSubmit: () => void; // Assuming onSubmit doesn't take any parameters
}

export const ImageLinkForm: React.FC<ImageLinkFormProps> = ({ onInputChange, onButtonSubmit }) => {

  return <>
    <div className="ms-2" style={{
      textAlign: 'center',
    }}>
      <p className="f3 white">
        {'This Magic Brain will detect faces in your pictures. Give it a try.👽'}
      </p>
      <div className="pa4 br3 shadow-5 w-50 LinkFormBG" style={{
        margin: '0 auto',
        // background: 'black'
      }}>
        <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
        <button
          className="w-20 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onButtonSubmit}
          style={{
            fontSize: '1em'
          }}
          >
          <span>Detect</span>
        </button>
      </div>
    </div>
  </>
};