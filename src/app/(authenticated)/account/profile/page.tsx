import { AccountTabs } from "@/app/(authenticated)/account/_navigation/account-tabs";
import { Heading } from "@/components/heading";

const ProfilePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Profile"
        description="Manage your profile settings"
        tabs={<AccountTabs />}
      />
    </div>
  );
};

export default ProfilePage;
