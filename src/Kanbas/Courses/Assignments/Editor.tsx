export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <p>
          <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        </p>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the 
          landing page of your web application running on Netlify. 
          The landing page should include the following: Your full 
          name and section Links to each of the lab assignments Link 
          to the Kanbas application Links to all relevant source 
          code repositories The Kanbas application should include a 
          link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <p>
                <label htmlFor="wd-points">Points</label>
              </p>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <p>
                <label htmlFor="wd-group">Assignment Group</label>
              </p>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">Assignments</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <p>
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </p>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <p>
                <label htmlFor="wd-submission-type">Submission Type</label>
              </p>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="ONLINE">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <div>
                <label htmlFor="wd-online-entry-options">Online Entry Options</label>
              </div>
              <input type="checkbox" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

              <input type="checkbox" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Upload</label><br/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <div>
                <label htmlFor="wd-assign-to">Assign To</label>
              </div>
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <p>
                <div>
                  <label htmlFor="wd-due-date">Due</label>
                </div>
                <input type="date" id="wd-due-date" value="2024-05-13" />
              </p>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <table>
                <tr>
                  <td align="left" valign="top">
                    <div>
                      <label htmlFor="wd-available-from">Available from</label>
                    </div>
                    <input type="date" id="wd-available-from" value="2024-05-06" />
                  </td>
                  <td align="left" valign="top">
                    <div>
                      <label htmlFor="wd-available-until">Until</label>
                    </div>
                    <input type="date" id="wd-available-until" value="2024-05-20" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <div>
            <button id="wd-cancel">Cancel</button>
            <button id="wd-save">Save</button>
        </div>
      </div>
  );}
  