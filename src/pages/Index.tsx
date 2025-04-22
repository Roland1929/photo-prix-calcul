
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Clock, Euro, Car, Hotel, Receipt } from 'lucide-react';

const Index = () => {
  const [shootingType, setShootingType] = useState<string>('portrait');
  const [shootingHours, setShootingHours] = useState<number>(1);
  const [postProdHours, setPostProdHours] = useState<number>(1);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [fuelCost, setFuelCost] = useState<number>(0);
  const [equipmentWear, setEquipmentWear] = useState<number>(0);
  const [tollFees, setTollFees] = useState<number>(0);
  const [mealCost, setMealCost] = useState<number>(0);
  const [parkingFees, setParkingFees] = useState<number>(0);
  const [hotelCost, setHotelCost] = useState<number>(0);
  const [vatRate, setVatRate] = useState<number>(0);
  const [socialCharges, setSocialCharges] = useState<number>(22);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    // Calcul du coût du temps de travail
    const workTimeTotal = (shootingHours + postProdHours) * hourlyRate;
    
    // Calcul des frais annexes
    const expenses = fuelCost + equipmentWear + tollFees + mealCost + parkingFees + hotelCost;
    
    // Sous-total avant charges et taxes
    const subtotal = workTimeTotal + expenses;
    
    // Calcul des charges sociales
    const socialChargesAmount = (subtotal * socialCharges) / 100;
    
    // Calcul de la TVA si applicable
    const vatAmount = vatRate > 0 ? ((subtotal + socialChargesAmount) * vatRate) / 100 : 0;
    
    // Total final
    const total = subtotal + socialChargesAmount + vatAmount;
    
    setTotalPrice(total);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Calculator className="h-6 w-6" />
            Calculateur de Prestation Photo
          </h1>
          <p className="text-gray-600">Calculez vos tarifs en incluant tous les frais</p>
        </div>

        <Card className="p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Type de Shooting */}
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

            {/* Temps de travail */}
            <div className="space-y-2">
              <Label htmlFor="shooting-hours" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Heures de Shooting
              </Label>
              <Input
                id="shooting-hours"
                type="number"
                min="1"
                value={shootingHours}
                onChange={(e) => setShootingHours(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="post-prod-hours" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Heures de Post-Production
              </Label>
              <Input
                id="post-prod-hours"
                type="number"
                min="0"
                value={postProdHours}
                onChange={(e) => setPostProdHours(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hourly-rate" className="flex items-center gap-2">
                <Euro className="h-4 w-4" />
                Taux Horaire (€)
              </Label>
              <Input
                id="hourly-rate"
                type="number"
                min="0"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
              />
            </div>

            {/* Frais de déplacement et matériel */}
            <div className="space-y-2">
              <Label htmlFor="fuel-cost" className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                Frais d'Essence (€)
              </Label>
              <Input
                id="fuel-cost"
                type="number"
                min="0"
                value={fuelCost}
                onChange={(e) => setFuelCost(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="equipment-wear">Usure du Matériel (€)</Label>
              <Input
                id="equipment-wear"
                type="number"
                min="0"
                value={equipmentWear}
                onChange={(e) => setEquipmentWear(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="toll-fees">Péages (€)</Label>
              <Input
                id="toll-fees"
                type="number"
                min="0"
                value={tollFees}
                onChange={(e) => setTollFees(Number(e.target.value))}
              />
            </div>

            {/* Frais annexes */}
            <div className="space-y-2">
              <Label htmlFor="meal-cost">Restauration (€)</Label>
              <Input
                id="meal-cost"
                type="number"
                min="0"
                value={mealCost}
                onChange={(e) => setMealCost(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="parking-fees">Parking (€)</Label>
              <Input
                id="parking-fees"
                type="number"
                min="0"
                value={parkingFees}
                onChange={(e) => setParkingFees(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hotel-cost" className="flex items-center gap-2">
                <Hotel className="h-4 w-4" />
                Hôtel (€)
              </Label>
              <Input
                id="hotel-cost"
                type="number"
                min="0"
                value={hotelCost}
                onChange={(e) => setHotelCost(Number(e.target.value))}
              />
            </div>

            {/* Charges et taxes */}
            <div className="space-y-2">
              <Label htmlFor="vat-rate">TVA (%)</Label>
              <Input
                id="vat-rate"
                type="number"
                min="0"
                max="100"
                value={vatRate}
                onChange={(e) => setVatRate(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="social-charges" className="flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                Charges Sociales (%)
              </Label>
              <Input
                id="social-charges"
                type="number"
                min="0"
                max="100"
                value={socialCharges}
                onChange={(e) => setSocialCharges(Number(e.target.value))}
              />
            </div>
          </div>

          <Button 
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700" 
            onClick={calculatePrice}
          >
            Calculer le Prix Total
          </Button>

          {totalPrice !== null && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-gray-600">Prix Total (avec charges et taxes)</p>
              <p className="text-3xl font-bold text-blue-600">{totalPrice.toFixed(2)}€</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Index;
