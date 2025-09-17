import Link from "next/link";
import { CardCompact } from "@/components/card-compact";
import { SignUpForm } from "@/features/auth/components/sign-up-form";
import { signInPath } from "@/paths";

const SignUpPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <CardCompact
        title="Sign Up"
        description="Create a new account"
        className="w-full max-w-[420px] self-center"
        content={<SignUpForm />}
        footer={
          <Link className="text-sm text-muted-foreground hover:underline" href={signInPath()}>
            Already have an account? Sign in
          </Link>
        }
      />
    </div>
  );
};
export default SignUpPage;
