import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Downsell from "./pages/Downsell"; // Keep Downsell if it's a separate page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* LanguageSwitcher removido para usar apenas detecção automática do idioma do navegador */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/downsell" element={<Downsell />} />
          {/* Remove old language-specific routes */}
          {/* <Route path="/ger" element={<Ger />} /> */}
          {/* <Route path="/fr" element={<IndexFr />} /> */}
          {/* <Route path="/it" element={<IndexIt />} /> */}
          {/* <Route path="/uk" element={<IndexUk />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
