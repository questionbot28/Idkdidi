import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Support from "@/pages/support";
import Music from "@/pages/music";
import Ticket from "@/pages/ticket";
import Invite from "@/pages/invite";
import Generator from "@/pages/generator";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/support" component={Support} />
      <Route path="/music" component={Music} />
      <Route path="/ticket" component={Ticket} />
      <Route path="/invite" component={Invite} />
      <Route path="/generator" component={Generator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;