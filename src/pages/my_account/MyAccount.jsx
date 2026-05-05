import "./MyAccount.css";

const MyAccount = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  const orders = [
    {id: 4321, status: "payed", total: 500},
    {id: 4322, status: "payed", total: 320},
    {id: 4323, status: "payed", total: 50},
    {id: 4324, status: "payed", total: 6700},
    {id: 4325, status: "payed", total: 520},
    {id: 4326, status: "payed", total: 670},
    {id: 4327, status: "payed", total: 90}
  ];

  return (
    <div className="p-16 bg-background min-h-100">
      <div className="flex flex-row items-center justify-between bdr-layout bg-surface p-32 rounded-md shadow-sm mb-16">
        <h1 className="text-center text-lg font-bold">My Account</h1>
      </div>

      <div className="account-layout">

        <div className="account-sidebar flex flex-col gap-16">

          <div className="bg-surface p-16 bdr-layout rounded-md shadow-sm">
            <p className="text-base font-medium">{user.name}</p>
            <p className="text-sm text-gray">{user.email}</p>
          </div>

          <div className="bg-surface p-16 bdr-layout rounded-md shadow-sm flex flex-col gap-12">
            <button className="bg-primary p-12 rounded-sm bdr-0 cursor-pointer">
              Edit Profile
            </button>

            <button className="bg-accent p-12 rounded-sm bdr-0 cursor-pointer">
              Logout
            </button>
          </div>

        </div>


        <div className="account-content bg-surface p-16 rounded-md shadow-sm">
          <h2 className="text-base font-medium mb-8">Recent Orders</h2>

          <div className="content-list flex flex-col overflow-auto gap-12">
            {orders?.length ? (orders.map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center p-12 bg-background rounded-sm"
              >
                <div>
                  <p className="text-sm">Order #{order.id}</p>
                  <p className="text-xs text-gray">{order.status}</p>
                </div>

                <p className="text-sm font-medium">${order.total}</p>
              </div>
            ))
          ) : <p className="empty-content text-xs text-gray">No orders have been placed yet</p>}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyAccount;