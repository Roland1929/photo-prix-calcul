
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator } from 'lucide-react';

const Index = () => {
  const [duration, setDuration] = useState<number>(1);
  const [shootingType, setShootingType] = useState<string>('portrait');
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    let basePrice = 0;
    switch (shootingType) {
      case 'portrait':
        basePrice = 75;
        break;
      case 'mariage':
        basePrice = 150;
        break;
      case 'evenement':
        basePrice = 100;
        break;
      default:
        basePrice = 75;
    }

    const total = basePrice * duration;
    setTotalPrice(total);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Calculator className="h-6 w-6" />
            Calculateur Photo
          </h1>
          <p className="text-gray-600">Calculez vos tarifs de prestation photo</p>
        </div>

        <Card className="p-6 shadow-lg">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="shooting-type">Type de Shooting</Label>
              <Select value={shootingType} onValueChange={setShootingType}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="portrait">Portrait</SelectItem>
                  <SelectItem value="mariage">Mariage</SelectItem>
                  <SelectItem value="evenement">Événement</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Durée (heures)</Label>
              <Input
                id="duration"
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              onClick={calculatePrice}
            >
              Calculer le Prix
            </Button>

            {totalPrice !== null && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-sm text-gray-600">Prix Total</p>
                <p className="text-2xl font-bold text-blue-600">{totalPrice}€</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
