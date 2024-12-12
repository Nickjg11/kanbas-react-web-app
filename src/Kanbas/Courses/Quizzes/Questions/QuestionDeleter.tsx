export default function QuestionDeleter({ dialogTitle, deleteQuestion, questionId}:
    { dialogTitle: string; deleteQuestion: (id: string) => void; questionId: string;}) {
      return (
        <div id="wd-delete-question-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {dialogTitle} </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <label>
                    Are you sure you want to delete question {questionId}?
                </label>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel </button>
                <button onClick={() => deleteQuestion(questionId)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                  Delete </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    