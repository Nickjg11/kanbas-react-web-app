export default function MCAnswer({ def, answers, index, setAnswers, setCorrect}: { def: any; answers: any[]; index: any; setAnswers: (answer: any) => void; setCorrect: (answer: any) => void; }) {  
  return (
      <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <div className="form-check d-flex justify-content-end">
                    <input className="form-check-input" type="radio"
                      name="radios" value="option1" 
                      onChange={() => setCorrect(index)} 
                      defaultChecked={answers[index] ? answers[index].isCorrect : false}/>
                    <label className="form-check-label "></label>
                </div>
              </div>
              <div className="wd-grid-col-half-page">
                <textarea className="form-control"
                  rows={1}
                  id="question-answer"
                  defaultValue={def}
                  onChange={(e) => {answers[index] = (e.target.value);
                                    setAnswers(answers)}}>
                </textarea>
              </div>
            </div>
  );}
  