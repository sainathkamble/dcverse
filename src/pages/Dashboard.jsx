import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import AvatarCard from "../components/AvatarCard";
import CreateAvatarModal from "../components/CreateAvatarModal";
import FloatingButton from "../components/FloatingButton";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          setUsers([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setUsers([]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4">
        <TopBar />

        <section className="pt-4 max-w-7xl mx-auto">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Avatars</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.length > 0 ? (
              users
                .slice(0, 3)
                .map((user) => (
                  <AvatarCard
                    key={user.id}
                    name={`${user.firstName} ${user.lastName}`}
                    avatar={user.image}
                  />
                ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No users found.
              </p>
            )}
          </div>
        </section>

        <FloatingButton onClick={() => setIsModalOpen(true)} />

        <CreateAvatarModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </main>
    </div>
  );
};

export default Dashboard;
