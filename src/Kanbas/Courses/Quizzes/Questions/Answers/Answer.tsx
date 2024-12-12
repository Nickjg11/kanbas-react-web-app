export default function Answer({ def, answers, index, setAnswers, }: { def: any; answers: any[]; index: any; setAnswers: (answer: any) => void; }) {  
  return (
      <div className="mb-3 wd-grid-row">
              <div className="mb-3 wd-grid-col-half-page">
                <label className="mt-2 mb-2 pe-3 float-end">Possible Answer</label>
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
  