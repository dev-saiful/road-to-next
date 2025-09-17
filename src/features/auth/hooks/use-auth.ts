import { User as AuthUser } from "lucia";
import { useEffect, useState } from "react";
import { getAuth } from "@/features/auth/queries/get-auth";

const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isFetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await getAuth();
      setUser(user);
      setFetched(true);
    };
    fetchUser();
  }, []);

  return { user, isFetched };
};

export { useAuth };
