import { IoSearch } from "react-icons/io5";
import { BiExport } from "react-icons/bi";

function ItemSold() {
  return (
    <div class="main">
      <div className="topbar-con">
        <h2>Sales Report</h2>
        <label htmlFor="">Sunday, 02 November 2024 at 9:46 AM</label>
      </div>

      <div className="grand-con">
        <label>
          Grand Total Sales : <span>400</span>
        </label>
        <br></br>
        <label>
          Grand Total Sales : <span>400</span>
        </label>
      </div>

      <div class="details mb-3">
        <div>
          <div class="flex flex-col justify-between mt-2 mb-3 h-full bg-card-bg p-2 border border-border-color">
            <div class="flex flex-row w-full mt-2 mb-3">
              <h1 className="w-full">ItemSold</h1>
              <div class="search">
                <div></div>
                <label>
                  <IoSearch className="text-gray-400 mr-2" />
                  <input type="text" placeholder="Search" />
                </label>
              </div>

              <button class="button">
                Export <BiExport />
              </button>
            </div>

            <div class="h-0.5 bg-gray-200 w-full mb-2 rounded-full"></div>

            {/* Table Section */}
            <div className="con-table daily-table p-1 rounded-lg bg-border-color w-full overflow-hidden h-full">
              <div className="table-wrapper-prod table-con bg-card-bg border border-border-color">
                {/* --Table Ari */}

                <table>
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Category</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1001</td>
                      <td>Matcha</td>
                      <td>40.00</td>
                      <td>Non-Coffee</td>
                    </tr>

                    <tr>
                      <td>1001</td>
                      <td>Matcha</td>
                      <td>40.00</td>
                      <td>Non-Coffee</td>
                    </tr>
                    <tr>
                      <td>1001</td>
                      <td>Matcha</td>
                      <td>40.00</td>
                      <td>Non-Coffee</td>
                    </tr>
                    <tr>
                      <td>1001</td>
                      <td>Matcha</td>
                      <td>40.00</td>
                      <td>Non-Coffee</td>
                    </tr>
                    <tr>
                      <td>1001</td>
                      <td>Matcha</td>
                      <td>40.00</td>
                      <td>Non-Coffee</td>
                    </tr>

                    <tr>
                      <td>1001</td>
                      <td>Matcha</td>
                      <td>40.00</td>
                      <td>Non-Coffee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemSold;
