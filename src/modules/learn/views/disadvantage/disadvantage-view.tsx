import { Button, Text } from "@/components";
import { ActionButton, AppBar } from "@/components/AppBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { CompletedDialog, CompletedFlag } from "../../components";
import { useDisadvantageModel } from "./disadvantage-model";

export const DisadvantageView = (
  methods: ReturnType<typeof useDisadvantageModel>,
) => {
  const { disadvantage, visible, handleGoBack, handleDialog, handleCompleted } =
    methods;

  return (
    <View className="flex-1 bg-zinc-50">
      <StatusBar backgroundColor="#22c55e" />

      <AppBar
        title="Desvantagens"
        leftButton={
          <ActionButton onPress={handleGoBack}>
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </ActionButton>
        }
      />

      <ScrollView>
        <View>
          <CompletedFlag
            className="absolute right-5 top-5 z-10"
            completed={disadvantage}
          />

          <Image
            source={require("@/assets/images/biogas-disadvantages.jpg")}
            className="h-60 w-full"
            resizeMode="cover"
          />
        </View>

        <View className="gap-4 px-5 py-5">
          <Text.Title>Vantagens do Biogás</Text.Title>
          <View className="flex-1">
            <View className="flex-1 flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Energia limpa e renovável:{" "}
              </Text.Body>
            </View>

            <Text.Body>
              O biogás é uma alternativa sustentável aos combustíveis fósseis,
              pois é produzido a partir de resíduos orgânicos e não agride o
              meio ambiente.
            </Text.Body>
          </View>
          <View className="flex-1">
            <View className="flex-1 flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Redução de gases do efeito estufa:{" "}
              </Text.Body>
            </View>

            <Text.Body>
              Ao reaproveitar resíduos que liberariam metano na natureza, o
              biogás ajuda a diminuir a emissão de gases poluentes responsáveis
              pelo quecimento global
            </Text.Body>
          </View>
          <View className="flex-1">
            <View className="flex-1 flex-row items-center gap-2">
              <MaterialIcons name="check-box" size={24} color="#22c55e" />
              <Text.Body className="font-semibold">
                Aproveitamento de resíduos orgânicos:{" "}
              </Text.Body>
            </View>

            <Text.Body>
              Restos de comida, esterco e lixo orgânico deixam de ser problema e
              se transformam em fonte de energia, reduzindo a quantidade de lixo
              nos aterros.
            </Text.Body>
          </View>

          <Button
            className="mt-4"
            label="Marcar como concluído"
            onPress={handleDialog}
          />
        </View>
      </ScrollView>

      <CompletedDialog
        visible={visible}
        message="Parabéns! Você concluiu este item com sucesso."
        onClose={handleCompleted}
      />
    </View>
  );
};
