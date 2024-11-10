type FaceRecognitionProps = {

  imgURL: string;
}

export const FaceRecognition = ({ imgURL }: FaceRecognitionProps) => {

  return <>
    {imgURL?
      <div className="f4 pa3 flex">
        <img
          src={imgURL}
          alt="people"
          className="center" />
      </div> : null
    }
  </>
}