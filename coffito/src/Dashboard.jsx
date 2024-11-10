import { BiExport } from "react-icons/bi";
import cup_icon_1 from "./assets/coffee-cup.png";
import cup_icon_2 from "./assets/coffee-sold.png";
import sales from "./assets/sales.png";

function Dashboard() {
  return (
    <div class="main">
      <div class="topbar-con">
        <h2>Dashboard</h2>
        <label htmlFor="">Sunday, 02 November 2024 at 9:46 AM</label>
      </div>

      <div className=" flex h-full bg-primary-bg ">
        <div className="h-full w-full">
          <div class="col-1">
            <div class="card-con-sales">
              <div class="card-con-sales-div">
                <h2>Total Sales</h2>
                <div className="dashboard-text-con">
                  <img src={sales} alt="" />
                  <span>45</span>
                </div>
              </div>
              <div class="card-con-sales-div">
                <h2>Total Cups Sold</h2>
                <div className="dashboard-text-con">
                  <img src={cup_icon_1} alt="" />
                  <span>45</span>
                </div>
              </div>
              <div class="card-con-sales-div">
                <h2>Total Products</h2>
                <div className="dashboard-text-con">
                  <img src={cup_icon_2} alt="" /> <span>34</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-between mt-2 mb-3 h-full bg-card-bg p-2 border border-border-color">
              {/* SALES_EXPORT-------------------------------------------------------------- */}
              <div class="flex  justify-between mt-2 mb-3">
                <h2>Sales</h2>
                <button className="exportButton">
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

        <div className="h-full w-[40%] pb-3">
          {/* -------------------------------------------------------------------- */}
          <div class="col-2 pr-5">
            <div class="best-selling-main-con">
              <div class="cardHeader">
                <h2>Best Selling</h2>
              </div>
              <div class="best-selling">
                <div class="card-con">
                  <div class="prod-con">
                    <img src={cup_icon_1} alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src={cup_icon_1} alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src={cup_icon_1} alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src={cup_icon_1} alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src={cup_icon_1} alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src={cup_icon_1} alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src={cup_icon_1} alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src={cup_icon_1} alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
