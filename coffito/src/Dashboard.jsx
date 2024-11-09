import { BiExport } from "react-icons/bi";

function Dashboard() {
  return (
    <div class="main">
      <div class="topbar-con">
        <h2>Dashboard</h2>
        <label htmlFor="">Sunday, 02 November 2024 at 9:46 AM</label>
      </div>

      <div className=" flex h-full bg-primary-bg">
        <div className="h-full w-full ">
          <div class="col-1">
            <div class="card-con-sales">
              <div class="card-con-sales-div">
                <h2>Total Sales</h2>
                <div className="dashboard-text-con">
                  <span>sasas</span> <span>ss</span>
                </div>
              </div>
              <div class="card-con-sales-div">
                <h2>Total Sales</h2>
                <div className="dashboard-text-con">
                  <span>sasas</span> <span>ss</span>
                </div>
              </div>
              <div class="card-con-sales-div">
                <h2>Total Sales</h2>
                <div className="dashboard-text-con">
                  <span>sasas</span> <span>ss</span>
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

              {/*TABLE---------------------------------------------------------------------- */}
              <div class="con-table daily-table p-2 rounded-lg bg-primary-bg w-full overflow-hidden h-full">
                <div class="table-con bg-card-bg border border-border-color h-full"></div>
                {/* --ARI TABLE  */}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-[40%]">
          {/* -------------------------------------------------------------------- */}
          <div class="col-2 pr-8">
            <div class="best-selling-main-con">
              <div class="cardHeader">
                <h2>Best Selling</h2>
              </div>
              <div class="best-selling">
                <div class="card-con">
                  <div class="prod-con">
                    <img src="/image/coffee-cup.png" alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src="/image/coffee-cup.png" alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src="/image/coffee-cup.png" alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src="/image/coffee-cup.png" alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src="/image/coffee-cup.png" alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src="/image/coffee-cup.png" alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src="/image/coffee-cup.png" alt=""></img>
                  </div>
                  <span>American Vanilla</span>
                </div>

                <div class="card-con">
                  <div class="prod-con">
                    <img src="/image/coffee-cup.png" alt=""></img>
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
