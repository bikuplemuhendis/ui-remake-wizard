import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import FormaTasarla from "./pages/FormaTasarla";
import FormaSiparis from "./pages/FormaSiparis";
import SSS from "./pages/SSS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/kategori/:slug" element={<CategoryPage />} />
          <Route path="/urun/:id" element={<ProductDetail />} />
          <Route path="/forma-tasarla" element={<FormaTasarla />} />
          <Route path="/forma-siparis" element={<FormaSiparis />} />
          <Route path="/sss" element={<SSS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
