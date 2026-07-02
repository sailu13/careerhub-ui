import Card from "@/shared/components/ui/Card";
import Button from "@/shared/components/ui/Button";
import Input from "@/shared/components/ui/Input";
import Label from "@/shared/components/ui/Label";

export default function LoginForm() {
  return (
    <Card>
      <h2 className="mb-6 text-center text-3xl font-bold">
        Welcome Back
      </h2>

      <form className="space-y-5">
        <div>
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>

          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <Button>
          Login
        </Button>
      </form>
    </Card>
  );
}