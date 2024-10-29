package net.chrisrichardson.ftgo.orderservice.infrastructure.sagaparticipants;

public class UndoBeginCancelCommand extends OrderCommand {
  public UndoBeginCancelCommand(long orderId) {
    super(orderId);
  }
}
